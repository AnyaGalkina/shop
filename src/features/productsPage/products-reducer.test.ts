import {
    getProducts,
    productsReducer,
    ProductType,
    setSortDirection,
    SortDirectionType,
} from './products-reducer';

let initialState: {
    products: Array<ProductType>;
    search: string;
    pageNumber: number;
    pagesCount: number;
    totalCount: number;
    pageSize: number;
    sortDirection: SortDirectionType;
};

beforeEach(() => {
    initialState = {
        products: [],
        search: '',
        pageNumber: 1,
        pagesCount: 0,
        totalCount: 0,
        pageSize: 6,
        sortDirection: '',
    };
});

test('products was added to state', () => {
    const products: Array<ProductType> = [
        {
            productId: '1',
            imgSrc: '',
            productName: '1',
            productDescription: '',
            pricePerUnit: 80,
            isAddedToCart: false,
        },
        {
            productId: '2',
            imgSrc: '',
            productName: '2',
            productDescription: '',
            pricePerUnit: 60,
            isAddedToCart: false,
        },
    ];

    const newState = productsReducer(
        initialState,
        getProducts.fulfilled(
            { products, pagesCount: 0, totalCount: 0 },
            '',
            // @ts-ignore
            { products },
        ),
    );

    // eslint-disable-next-line no-magic-numbers
    expect(newState.products.length).toBe(2);
});

test('sort detraction should be changed to asc ', () => {
    const newSortDirtection = 'asc' as SortDirectionType;
    const newState = setSortDirection({
        sortDirection: newSortDirtection,
    });

    // @ts-ignore
    expect(newState.sortDirection).toBe(newSortDirtection);
});
