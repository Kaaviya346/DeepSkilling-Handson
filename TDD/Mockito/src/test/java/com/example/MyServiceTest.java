//Author : Kaaviya R
//File : MyServiceTest 

package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create mock
        ExternalApi mockApi =
                Mockito.mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData())
                .thenReturn("Mock Data");

        // Inject mock
        MyService service =
                new MyService(mockApi);

        // Call method
        String result =
                service.fetchData();

        // Verify result
        assertEquals("Mock Data", result);
    }
}
