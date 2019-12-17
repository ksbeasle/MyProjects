
public class LongestSubString {
	
	
	
	public static void main(String args[]) {
		System.out.println(lengthOfLongestSubstring("pwwkew"));
	}
	
	
	
	
		public static int lengthOfLongestSubstring(String s) {
			String sub = "";
			for(int i = 0; i < s.length(); i++) {
				String c = "" + s.charAt(i);
				if(!sub.contains(c)) {
					sub += s.charAt(i);
				}
			}
			System.out.println(sub);
			return sub.length();
		}
		
	}


