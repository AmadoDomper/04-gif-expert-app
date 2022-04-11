import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Test in hook useFetchGifs', () => {
    
    test('should return intial state', () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
        const {data, loading} = result.current;
        console.log(result.current);
        // const {data, loading} = useFetchGifs( 'dragon ball' );

        console.log(data, loading);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    


})
