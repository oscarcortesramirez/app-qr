import { Crypto } from "../utils/Crypto";

test('se ejecuto', async () => {
    const data = "2020371018@uteq.edu.mx";
    const crypto = Crypto('AES');
    const encriptar = await crypto.encriptar(data);
    const hola = await crypto.desencriptar(encriptar)
    expect(data).toBe(hola);
})