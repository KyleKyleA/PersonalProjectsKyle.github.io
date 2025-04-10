import java.util.Scanner;
/**
 * Determine max and min values and the middle
 */
public class maxandmin {
    public static void main(String[] args) {
        
        showDescription();
        int[] numberList;
        int max,min;
        numberList = getList();
        max = findMax(numberList);
        min = findMin(numberList);
        displayOuput(numberList, max, min);
    }
    public static void showDescription() {
        System.out.println("This program is designed to" +
        "caluculate max and min valuesa and the middle with series of integers ");
    }
    public static String getFirstName() {
        String firstName;
        Scanner input = new Scanner(System.in);
        System.out.println("\n please enter your first name please ");
        firstName = input.nextLine();
        return firstName;
    }
    public static String getlastName() {
        String lastName;
        Scanner input = new Scanner(System.in);
        System.out.println("\n please enter your last name please ");
        lastName = input.nextLine();
        return lastName;
    }
    public static int[] getList() {
        Scanner input = new Scanner(System.in);
        String stringinput;
        System.out.println("Please enter a list of numbers seperated by comma's ");
        stringinput = input.nextLine();
        String[] stringNumList = stringinput.split(",");
        int[] numberList = new int[stringNumList.length];
        for(int i=0; i<stringNumList.length; i++){
            numberList[i] = Integer.parseInt(stringNumList[i]);
          }
          return numberList; 
        }
        public static int findMax (int[] numberList) {
            int max = numberList[0];
            for (int i = 0; i<numberList.length; i++) {
                if(numberList[i]>max) {
                    max = numberList[i];
                }
            }
            return max;
        }
        public static int findMin(int [] numberList) {
            int min = numberList[0];
            for (int i=0; i<numberList.length; i++) {
                if(numberList[i]<min) {
                    min = numberList[i];
                }
            }
            return min;
        }
        public static String parseArray (int[] numberList) {
            String parsedArray="";
            for(int i=0;i<numberList.length; i++){
              parsedArray += Integer.toString(numberList[i])+",";
            }
            return parsedArray;
          }
        public static void displayOuput(int[] numberList, int max, int min) {
            System.out.println("The array list created by your input is "+parseArray(numberList)+"\nThe highest number inputted into the array is "+max+
            "\nThe lowest number inputted into the array is "+min+"\nThe middle value is "+((max+min)/2));
        }
       
 }

