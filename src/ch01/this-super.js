// Person 클래스
peopleInSameCountry(friends){
  var result = [];
  for (let idx in friends){
    var friend = friends[idx]
    if (this.address.country === friend.address.country){
      result.push(friend);
    }
  }
  return result;
};

// Student 클래스
studentsInSameCountryAndSchool(friends){
  var closeFriends = super.peopleInSameCountry(friends)
  var result = []
  for (let idx in closeFriends){
    var friend = closeFriends[idx]
    if (friend.school === this.school){
      result.push(friend)
    }
  }
  return result;
}

