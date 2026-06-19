
import java.util.Scanner;

public class SearchTest {


public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    // Product count
    System.out.print("Enter number of products: ");
    int n = sc.nextInt();
    sc.nextLine();

    // Product array
    Product[] products = new Product[n];

    // Product details
    for (int i = 0; i < n; i++) {

        System.out.println("\nEnter details for Product " + (i + 1));

        System.out.print("Enter Product ID: ");
        int id = sc.nextInt();
        sc.nextLine();

        System.out.print("Enter Product Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Product Category: ");
        String category = sc.nextLine();

        products[i] = new Product(id, name, category);
    }

    // Search input
    System.out.print("\nEnter Product ID to search: ");
    int searchId = sc.nextInt();

    // Linear search
    Product linearResult =
            SearchService.linearSearch(products, searchId);

    System.out.println("\n--- Linear Search Result ---");

    if (linearResult != null) {
        linearResult.display();
    } else {
        System.out.println("Product Not Found");
    }

    // Binary search
    Product binaryResult =
            SearchService.binarySearch(products, searchId);

    System.out.println("\n--- Binary Search Result ---");

    if (binaryResult != null) {
        binaryResult.display();
    } else {
        System.out.println("Product Not Found");
    }

    sc.close();
}

}
