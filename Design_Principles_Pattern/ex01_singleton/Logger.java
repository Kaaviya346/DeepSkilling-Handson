// Singleton class
public class Logger {

    // Single instance
    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger Created");
    }

    // Get instance method
    public static Logger getInstance() {

        if (instance == null) {
            instance = new Logger();
        }

        return instance;
    }

    // Log message
    public void log(String message) {
        System.out.println("LOG : " + message);
    }
}