let containsDuplicate = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++)
        {
        for (let j = i + 1; j < len; j++) 
        {
            if (nums[i] === nums[j]) 
            {
                        return true;
            }
        }
    }
    return false;
};