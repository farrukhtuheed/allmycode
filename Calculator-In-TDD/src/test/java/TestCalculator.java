
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
	
/*	public void testAdd() {
	
		assertEquals(calculator.add(2, 4), 6);
		assertEquals(calculator.add(2, 5), 7);
		assertEquals(calculator.add(2, 6), 8);
		assertEquals(calculator.add(4, 5), 9);
		assertEquals(calculator.add(5, 5), 10);
		
		//out of if condition 
		assertEquals(calculator.add(15, 5), 20);
		
	}
	
		
	public void testSub() {
		assertEquals(calculator.sub(7.0, 7.0), 0.0);
		assertEquals(calculator.sub(14.0, 7.0), 7.0);
		assertEquals(calculator.sub(17.0, 7.5), 9.5);
		assertEquals(calculator.sub(18.0, 7.5), 10.5);
		assertEquals(calculator.sub(18.0, 6.5), 11.5);
		
		//out of if condition 
		assertEquals(calculator.sub(20.0, 6.0), 14.0);
		
		
	}
	
	public void testMulti() {
	
		assertEquals(calculator.multi(1.0, 1.0), 1.0);
		assertEquals(calculator.multi(2.0, 2.0), 4.0);
		assertEquals(calculator.multi(3.0, 3.0), 9.0);
		assertEquals(calculator.multi(7.0, 7.0), 49.0);
		assertEquals(calculator.multi(10.0, 5.0), 50.0);
		
		//out of if condition 
		assertEquals(calculator.multi(20.0, 6.0), 120.0);
		
	}
	
	public void testDiv() {
		assertEquals(calculator.div(7.0, 7.0), 1.0);
		assertEquals(calculator.div(14.0, 7.0), 2.0);
		assertEquals(calculator.div(21.0, 7.0), 3.0);
		assertEquals(calculator.div(28.0, 7.0), 4.0);
		assertEquals(calculator.div(35.0, 7.0), 5.0);

		//out of if condition 
		assertEquals(calculator.div(90.0, 3.0), 30.0);
	}
	*/
	
	public void testTab(){
			//for(int i=0; i<5;i++)
			assertEquals(calculator.tab(3),3);
			
	}
	
	
}