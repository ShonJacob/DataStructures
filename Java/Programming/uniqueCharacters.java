public class uniqueCharacters {

    static boolean uniqueCharacters(String str){
        if(str.length() >256){
            return false;
        }
        boolean charstr[] = new boolean[256];
        for(int i=0;i<str.length();i++){
            int val = (int)str.charAt((i));
            if(charstr[val]){
                return false;
            }
            charstr[val] = true;
        }
        return true;
    }

    public static void main(String args[]){
        System.out.println(uniqueCharacters("shoon"));
    }
}
