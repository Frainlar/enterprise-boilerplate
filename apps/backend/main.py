from fastapi import FastAPI

app = FastAPI()

@app.get("/generate")
async def generate_code(prompt: str):
    llm = OpenAI(temperature=0.7)
    return {"result": llm(prompt)}