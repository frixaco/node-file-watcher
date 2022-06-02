export default async function postUser() {
    await new Promise((res) => setTimeout(res, 1000));

    return { success: true };
}
