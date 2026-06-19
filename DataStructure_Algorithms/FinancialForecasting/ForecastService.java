// File : ForecastService 

public class ForecastService {

// Recursive method
public static double predictValue(double amount, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return amount;
        }

        // Next year value
        return predictValue(
                amount * (1 + growthRate / 100),
                growthRate,
                years - 1);
    }

}

