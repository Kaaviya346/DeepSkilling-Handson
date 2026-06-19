// Search methods
public class SearchService {

// Linear search
public static Product linearSearch(Product[] products, int id) {

    for (Product product : products) {

        if (product.productId == id) {
            return product;
        }
    }

    return null;
}

// Binary search
public static Product binarySearch(Product[] products, int id) {

    int left = 0;
    int right = products.length - 1;

    while (left <= right) {

        int mid = left + (right - left) / 2;

        if (products[mid].productId == id) {
            return products[mid];
        }

        if (products[mid].productId < id) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

}