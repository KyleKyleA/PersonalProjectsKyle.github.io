/**
 * This program is designed to get a word from the user 
 * and will pyramid it
 * 
 */
public class wordpyramid {
    public static void main(String[] args) {
        //D
        displayDescription();
        String word;
        int length;
        String pyramid;
        String space = "";

        word = getWord();
        length = getLength();


        pyramid = buildPyramid(word, length);

        //O
        displayPyramid(pyramid);
    }
    public static void displayDescription() {
        System.out.println("\nWelcome to word pyramid program");
    }
    /**
     * Gets the word from the user
     * @return The word given by the user if it's less then 2
     */
    public static String getWord() {

    
    String word;
    Scanner input = new Scanner(System.in);
    while(true) {
        System.out.println("\nPlease enter a term"); //Asking the user to enter a term
        word=input.nextLine();
        if (word.length()>=2 && !word.contains(" ")) {//The term cannot be less then 2
            break;
        }
        else {
            System.out.println("The term must be greater than 2 characters and not contain spaces.");
        }
}
    word = word.replace(" ", "  ");
    return word;
}
/**
 * Gets the length of the word 
 * @param word the User's word
 * @return The length of the word 
 */
public static int getLength(String word) {
    return word.length();
}
/**
 * Builds the pyramid
 * @param word The user's word
 * @param length The length
 */
public static String buildPyramid(String word, int length) {
    String pyramid = "";
    String space = "";
    if (word.length() % 2 == 0) {
      do {
        space += " ";
      } while (space.length() < word.length() / 2 - 1);
      pyramid = buildPyramidVertical(word, length / 2 - 1, length / 2 + 1, "\n", space);
    } else {
      do {
        space += " ";
      } while (space.length() < word.length() / 2);
      pyramid = buildPyramidVertical(word, length / 2, length / 2 + 1, "\n", space);
    }
    return pyramid;
  }
/**
* Builds the pyramid vertically
* @param word The user's word 
* @param leftCharacter The leftCharactermost character in the word
* @param rightCharacter The rightCharactermost character in the word
* @param pyramid The pyramid 
* @param space The spaces at the ends of the word
* @return The pyramid
*/  
}
public static String buildPyramidVertical(String word, int leftCharacter, int rightCharacter, String pyramid, String space) {
    pyramid += Space + word.substring(leftCharacter, rightCharacter) + "\n";  //Builds the pyramid vertically instead of horizontally.
    if (Space.equals("")) {
      return pyramid;
    }
    Space = Space.substring(0, Space.length() - 1);
    return buildPyramidVertical(word, leftCharacter - 1, rightCharacter + 1, pyramid, Space);
  }
  /**
   * Displays the pyramid
   * @param pyramid The pyramid
   */
  public static void displayPyramid(String pyramid) 
  {
    pyramid += Space + word.substring(leftCharacter, rightCharacter) + "\n";  //Builds the pyramid vertically instead of horizontally.
    if (Space.equals("")) {
      return pyramid;
    }
    Space = Space.substring(0, Space.length() - 1);
    return buildPyramidVertical(word, leftCharacter - 1, rightCharacter + 1, pyramid, Space);
  }
  /**
   * Displays the pyramid
   * @param pyramid The pyramid
   */
  public static void displayPyramid(String pyramid) 
  {
    System.out.println(pyramid); //Display the pyramid
  }

