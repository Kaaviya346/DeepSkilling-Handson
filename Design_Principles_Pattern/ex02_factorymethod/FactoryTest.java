//Author Kaaviya R
//File : FactoryTest

import java.util.Scanner;

public class FactoryTest {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // User choice
        System.out.println("1. Word");
        System.out.println("2. PDF");
        System.out.println("3. Excel");
        System.out.print("Enter Choice: ");

        int choice = sc.nextInt();

        DocumentFactory factory = null;

        // Select factory
        switch (choice) {

            case 1:
                factory = new WordFactory();
                break;

            case 2:
                factory = new PdfFactory();
                break;

            case 3:
                factory = new ExcelFactory();
                break;

            default:
                System.out.println("Invalid Choice");
                sc.close();
                return;
        }

        // Create document
        Document document = factory.createDocument();

        // Open document
        document.open();

        sc.close();
    }
}