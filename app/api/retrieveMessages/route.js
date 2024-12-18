export async function GET() {

    const myobj = {
        messages: [
            'Skibidi',
            'Skibidi',
            'Hawk Tuah',
            'Hawk',
            {
                bruh: 'moment'
            }
        ]
    };
    return new Response(JSON.stringify(myobj), {
        status: 200,
        headers: {
            'Content-Type': 'text/plain', // Explicitly set content type
        }
    });
}