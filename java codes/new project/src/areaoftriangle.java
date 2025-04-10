import java.util.Scanner;
/**
 * This program will calculate the area of a scalene triangle
 * Trying to relean java again 
 * @author Kyle Angeles
 * @version 3/16/25
 */

 public class areaoftriangle {

        public static void main(String[] args) {
            double sideA, sideB, sideC; // D
            double area;
            boolean isValid;
            showDescription();

            do { 
                sideA=getSide("a");
                sideB=getSide("b");
                sideC=getSide("c");

            isValid=checkIfScalene(sideA, sideB, sideC);
        }while (!isValid);

        area=calculateArea(sideA, sideB, sideC);//P

        displayResults(sideA, sideB, sideC, area);
 }
 /**
  * checks the sides to determiune whether it will form a scalene triangle
  *@param sideA the side a of the triangle
    *@param sideB the side b of the triangle
    *@param sideC the side c of the triangle
    *@return True if triangle is a scalene, False if otherwise
  */
  public static boolean checkIfScalene(double sideA, double sideB, double sideC) {

    boolean isValid;

    if(sideA==sideB || sideB == sideC || sideA == sideC) {
        isValid = false;
        System.out.println("Enter the sides of different lengths");
    }
    else {
        if (sideA<sideB+sideC && sideB<sideA+sideC && sideC<sideA+sideB) {
            isValid = true;
        }
        else {
            isValid = false;
            System.out.println("What you inputed does NOT form a triangle, please retype the lengths");
        }
    }
    return isValid;
  }
  public static void displayResults(double sideA, double sideB, double sideC, double area) {
		
    System.out.println("\nThe user gave sides: of sideA="+sideA+", sideB="+sideB+", sideC="+sideC+
                            "\nWhich will give the area of "+String.format("%1.1f" ,area)+" sq units"); 
  }
  public static double calculateArea(double sideA, double sideB, double sideC) {
    
    double area, semiPerimeter;

    semiPerimeter = (sideA+sideB+sideC)/2; //p
    area=Math.sqrt(semiPerimeter*(semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC));

    return area;
  }
  public static void showDescription() {
    System.out.println("Area and perimeter calculator for triangles ");
    System.out.println("-------------------------------------------");
    System.out.print("User will ned to enter 3 different sides for the triangle\n");
  }
  public static double  getSide(String type) {
    double side=0;
    Scanner input = new Scanner(System.in);
    while(true) {
        System.out.println(" please enter a side "+type);
        try {
            side=Double.parseDouble(input.nextLine());
            if (side>0) {
                break;
            } 
            else {
                System.out.println("Enter sides above 0");
            }
        }
        catch (NumberFormatException error) {
            System.out.println("Please provide an numeral input");
        }
  }
    return side;
 }
}