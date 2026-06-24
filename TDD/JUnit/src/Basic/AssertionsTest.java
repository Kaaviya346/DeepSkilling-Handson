package Basic;

import static org.junit.Assert.*;

import org.junit.Test;

public class AssertionsTest {

	@Test
	public void test() {
		// Assert Equals
        assertEquals(5, 2 + 3);

        // Assert True
        assertTrue(5 > 3);

        // Assert False
        assertFalse(5 < 3);

        // Assert Null
        assertNull(null);

        // Assert Not Null
        assertNotNull(new Object());
		
	}

}
