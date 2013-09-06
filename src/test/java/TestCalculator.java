
import junit.framework.TestCase;

public class TestCalculator extends TestCase {

	public TestCalculator (String name){
		super(name);
	}
	

	Calculator calculator; /** @throws java.lang.Exception */

	protected void setUp() throws Exception {
		calculator = new Calculator(); 

	} //** @throws java.lang.Exception *// 
	
	protected void tearDown() throws Exception {

	} 
	
	public void testAdd() {
		assertEquals(calculator.add(2, 2),4);
		assertEquals(calculator.add(2, 4), 6);
				assertEquals(calculator.add(2, 5), 7);
		
		

		
	}
	
	public void testSub() {
		assertEquals(calculator.sub(7.0, 7.0), 0.0);
		
	}
	
	public void testMulti() {
		assertEquals(calculator.multi(7.0, 7.0), 49.0);
		
	}
	
	public void testDiv() {
		assertEquals(calculator.div(7.0, 7.0), 1.0);
	}
}