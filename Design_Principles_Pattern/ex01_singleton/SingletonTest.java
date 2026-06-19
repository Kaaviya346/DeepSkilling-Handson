//Author : Kaaviya R
//File : SingletonTest

public class SingletonTest {

    public static void main(String[] args) {

        // First request
        Logger logger1 = Logger.getInstance();

        logger1.log("Application Started");

        // Second request
        Logger logger2 = Logger.getInstance();

        logger2.log("User Logged In");

        // Instance check
        if (logger1 == logger2) {
            System.out.println("Same Logger Instance");
        } else {
            System.out.println("Different Logger Instances");
        }
    }
}