import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Test in hook useFetchGifs', () => {
    
    test('should return intial state', async() => {
        const { result , waitForNextUpdate} = renderHook(() => useFetchGifs('Dragon Ball'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        console.log(data, loading);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('should return and array of imgs and the loading in false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));

        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toEqual( 10 );
        expect(loading).toBe(false);
    })
    
    


})
