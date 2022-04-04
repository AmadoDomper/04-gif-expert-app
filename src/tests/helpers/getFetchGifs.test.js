import { getFetchGifs } from "../../helpers/getFetchGifs"


describe('Test with getFetchGifs', () => { 

    test('should return 10 elements', async () => {
        const gifs = await getFetchGifs('Goku');

        expect(gifs.length).toBe(10);
    })

    test('should return 0 elements', async () => {
        const gifs = await getFetchGifs('');

        expect(gifs.length).toBe(0);
    })

 })