// Author : Kaaviya R
// File : LoggingExample

package com.logging.SLF4JDemo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    // Logger object
    private static final Logger logger =
            LoggerFactory.getLogger(LoggingExample.class);
    public static void main(String[] args) {
        // Warning log
        logger.warn("This is a warning message");
        try {
            // Exception generation
            int result = 10 / 0;

        }
        catch (Exception e) {

            // Error log
            logger.error("An error occurred: Division by zero", e);
        }
    }
} 