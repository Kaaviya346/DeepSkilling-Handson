//Author : Kaaviya R
//File : ForecastTest

import java.util.Scanner;

public class ForecastTest {

public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    // User input
    System.out.print("Enter Current Value: ");
    double currentValue = sc.nextDouble();

    System.out.print("Enter Annual Growth Rate (%): ");
    double growthRate = sc.nextDouble();

    System.out.print("Enter Number of Years: ");
    int years = sc.nextInt();

    // Predict value
    double futureValue =
            ForecastService.predictValue(currentValue, growthRate, years);

    // Display result
    System.out.printf(
            "\nPredicted Future Value: %.2f",futureValue);

    sc.close();
}

}