 
public class Calculator {
 
	public int add(int num1, int num2){

		int sum;
		sum = num1 + num2;
		if ( sum == 6 || sum == 7 || sum == 8){
			
			System.out.println("Sum is :" + sum);
		}
		
		/*while (sum >= 7 && sum == 6) {
			
			System.out.println("Sum is greater than :" + sum);
			int rst = sum - 1;
			System.out.println("Result is greater than :" + rst);
		}	
		*/
		
		return sum;
	}

	public double sub(double num1, double num2){

 
		double result;
		result = num1 - num2;
		if(result== 0.0 || result == 9.5 || result == 10.5 || result == 7.5){
			
			System.out.println("Subtraction Result is " + result);
			
		}
		
		
		
		return result;
	}
 
	public double multi(double num1, double num2){

		
		double result;
		result = num1 * num2;
		if(result==9.0 || result == 49.0 || result == 1.0 || result ==9.0){
			
			System.out.println("Multiplication Result is " + result);
			
		}
		
		return result;

	}
 
	public double div(double num1, double num2){

 
		double result;
		result = num1 / num2;
		if(result==5.0 || result == 1.0 || result == 2.0 || result == 3.0){
			
			System.out.println("Division Result is " + result);
			
		}
		
		return result;

	}
	

}