enum AUDIENCE_TYPE {
    FRIENDS = 'friends',
    FRIEND_EXCEPT = 'friendsExcept',
    SPECIFIC_FRIENDS = 'specificFriends',
    ONLY_ME = 'onlyMe',
}

export const AudienceLabel = (audienceType: string): string => {
    switch (audienceType) {
       case AUDIENCE_TYPE.FRIENDS:
          return 'Bạn bè';
       case AUDIENCE_TYPE.FRIEND_EXCEPT:
          return 'Bạn bè ngoại trừ';
       case AUDIENCE_TYPE.SPECIFIC_FRIENDS:
          return 'Bạn bè cụ thể';
       case AUDIENCE_TYPE.ONLY_ME:
          return 'Chỉ mình tôi';
       default:
          return 'Công khai';
    }
};
