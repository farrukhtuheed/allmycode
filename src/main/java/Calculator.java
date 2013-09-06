 
public class Calculator {
 
	public int add(int num1, int num2){

		int sum;
		sum = num1 + num2;
		if ( sum == 7 ){
			System.out.println("Sum is 7");
		}
		
		return sum;
	}

	public double sub(double num1, double num2){

 
		double sum;
		sum = num1 - num2;
		return sum;
	}
 
	public double multi(double num1, double num2){

 
		double sum;
		sum = num1 * num2;
		return sum;

	}
 
	public double div(double num1, double num2){

 
		double sum;
		sum = num1 / num2;
		return sum;

	}
}