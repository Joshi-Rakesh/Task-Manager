export async function GET() {
    const initialTasks = [
        { id: 1, title: 'Initial Item 1', description: 'Default task 1', priority: 'High', completed: false },
        { id: 2, title: 'Initial Item 3', description: 'Default task 2', priority: 'Medium', completed: false },
        { id: 3, title: 'Initial Item 3', description: 'Default task 3', priority: 'Low', completed: false },
    ];
    return new Response(JSON.stringify(initialTasks), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
