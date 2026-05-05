export async function generateMessage(prompt) {
    const res = await fetch("/api/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "llama3",
            prompt,
            stream: false,
        }),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error: ${res.status} - ${text}`);
    }

    const data = await res.json();
    return data.response;
}
