
import express from "express";
import Replicate from "replicate";


const app = express();

// Let's show the value of the variable REPLICATE_API_KEY
console.log(process.env.REPLICATE_API_KEY);

app.post("/generate", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({
              message: "prompt is required"
        });
    } 

    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_KEY,
    });


    const input = {
        cfg: 4.5,
        steps: 28,
        prompt: "a photo of vibrant artistic graffiti on a wall saying \"ImaginaLabgenerative Show\"",
        aspect_ratio: "3:2",
        output_format: "webp",
        output_quality: 90,
        negative_prompt: "",
        prompt_strength: 0.85
    };
  
    const output = await replicate.run("stability-ai/stable-diffusion-3", { input });
     console.log(output);

    res.json(output)
    }
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
