/**
 * NSLC.js v1.0.0 - Production Core
 * Neuro-Symbolic Latent Consistency Engine
 * Utilizing WebGPU for 5D Isotropic Vector Matrix Alignment
 */

const NSLC_SHADERS = {
    manifoldCompute: `
        struct Vector5D {
            components: array<f32, 5>,
            padding: array<f32, 3>, // Padding for 32-byte alignment
        };

        struct Uniforms {
            theta: f32,
            axis1: u32,
            axis2: u32,
            vectorCount: u32,
        };

        @group(0) @binding(0) var<storage, read_write> vectors: array<Vector5D>;
        @group(0) @binding(1) var<uniform> params: Uniforms;

        @compute @workgroup_size(64)
        fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
            let idx = global_id.x;
            if (idx >= params.vectorCount) { return; }

            var v = vectors[idx].components;
            let c = cos(params.theta);
            let s = sin(params.theta);

            // Perform 5D Givens Rotation (Manifold Alignment)
            let temp1 = c * v[params.axis1] - s * v[params.axis2];
            let temp2 = s * v[params.axis1] + c * v[params.axis2];

            vectors[idx].components[params.axis1] = temp1;
            vectors[idx].components[params.axis2] = temp2;

            // Recalibrate to Unit Hypersphere (Merkaba Calibration)
            var mag: f32 = 0.0;
            for(var i = 0u; i < 5u; i++) {
                mag += vectors[idx].components[i] * vectors[idx].components[i];
            }
            mag = sqrt(mag);

            if (mag > 0.0) {
                for(var i = 0u; i < 5u; i++) {
                    vectors[idx].components[i] /= mag;
                }
            }
        }
    `
};

export class NSLCEngine {
    constructor() {
        this.device = null;
        this.pipeline = null;
        this.vectorBuffer = null;
        this.paramsBuffer = null;
        this.vectorCount = 128;
        this.isInitialized = false;
        this.globalLatentState = new Float32Array(5).fill(0.5);
    }

    async initialize() {
        if (!navigator.gpu) throw new Error("WebGPU Not Supported");
        
        const adapter = await navigator.gpu.requestAdapter();
        this.device = await adapter.requestDevice();

        const shaderModule = this.device.createShaderModule({
            code: NSLC_SHADERS.manifoldCompute
        });

        this.pipeline = this.device.createComputePipeline({
            layout: 'auto',
            compute: { module: shaderModule, entryPoint: 'main' }
        });

        this._prepareBuffers();
        this.isInitialized = true;
        console.log("💎 NSLC Engine: WebGPU Manifold Pipeline ACTIVE");
    }

    _prepareBuffers() {
        // Create 128 vectors, each 5 floats + 3 padding = 32 bytes
        const initialData = new Float32Array(this.vectorCount * 8);
        for(let i=0; i<this.vectorCount; i++) {
            for(let j=0; j<5; j++) initialData[i*8 + j] = Math.random() - 0.5;
        }

        this.vectorBuffer = this.device.createBuffer({
            size: initialData.byteLength,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST,
            mappedAtCreation: true
        });
        new Float32Array(this.vectorBuffer.getMappedRange()).set(initialData);
        this.vectorBuffer.unmap();

        this.paramsBuffer = this.device.createBuffer({
            size: 16, // theta (f32), axis1 (u32), axis2 (u32), count (u32)
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
    }

    async runInferencePass(theta, axis1 = 0, axis2 = 1) {
        const params = new Uint32Array([
            new Float32Array([theta])[0], // Bit-cast float to u32
            axis1, axis2, this.vectorCount
        ]);
        this.device.queue.writeBuffer(this.paramsBuffer, 0, params);

        const bindGroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                { binding: 0, resource: { buffer: this.vectorBuffer } },
                { binding: 1, resource: { buffer: this.paramsBuffer } }
            ]
        });

        const commandEncoder = this.device.createCommandEncoder();
        const passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setBindGroup(0, bindGroup);
        passEncoder.dispatchWorkgroups(Math.ceil(this.vectorCount / 64));
        passEncoder.end();

        this.device.queue.submit([commandEncoder.finish()]);
        return await this._readback();
    }

    async _readback() {
        const readBuffer = this.device.createBuffer({
            size: this.vectorCount * 32,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        });

        const encoder = this.device.createCommandEncoder();
        encoder.copyBufferToBuffer(this.vectorBuffer, 0, readBuffer, 0, this.vectorCount * 32);
        this.device.queue.submit([encoder.finish()]);

        await readBuffer.mapAsync(GPUMapMode.READ);
        const data = new Float32Array(readBuffer.getMappedRange());
        
        // Extract the 0th vector as the current Global Latent State
        this.globalLatentState = data.slice(0, 5);
        readBuffer.unmap();
        return data;
    }
}
