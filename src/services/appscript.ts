import {Inquiry} from "@/models/Inquiry.ts";

const apiUrl = import.meta.env.VITE_API_URL;
export async function postContactForm(formData: Inquiry){
    return await fetch(apiUrl, {
        method: 'POST',
        redirect: "follow",
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
    })
}

export async function getList(category: string, paging: number){
    const params = new URLSearchParams({
        category,
        action: 'list',
    });
    if (typeof paging === 'number' && paging > 0) {
        params.set('paging', String(paging));
    }
    const response = await fetch(`${apiUrl}?${params.toString()}`, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`getList failed: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

export async function getSingle(category: string, url: string){
    const params = new URLSearchParams({
        category,
        action: 'single',
        url,
    });
    const response = await fetch(`${apiUrl}?${params.toString()}`, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`getSingle failed: ${response.status} ${response.statusText}`);
    }
    return response.json();
}