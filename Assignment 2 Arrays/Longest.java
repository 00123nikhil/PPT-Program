import java.util.HashMap;
import java.util.Map;

public class Longest {
    // findLHS ----> LogestHarmoniousSubsequece
    public static int findLHS(int[] nums) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        int longestSubsequence = 0;

        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            int num = entry.getKey();
            int frequency = entry.getValue();

            if (frequencyMap.containsKey(num + 1)) {
                int currentSubsequenceLength = frequency + frequencyMap.get(num + 1);
                longestSubsequence = Math.max(longestSubsequence, currentSubsequenceLength);
            }
        }
        return longestSubsequence;
    }

    public static void main(String[] args) {
        int[] nums = {1, 3, 2, 2, 5, 2, 3, 7};
        System.out.println(findLHS(nums)); 
    }
}
