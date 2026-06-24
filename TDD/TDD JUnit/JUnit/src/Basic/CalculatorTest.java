//Author : Kaaviya R

package Basic;

import static org.junit.Assert.*;
import org.junit.Test;

public class CalculatorTest {

	@Test
	public void test() {
		Calculator calculator = new Calculator();
		//Add 3,4 and store in result
		int result = calculator.add(3, 4);
		
		//Checks the result is equal to 7
		assertEquals(7,result);	
	}
	
}
