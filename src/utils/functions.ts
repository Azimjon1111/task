const RangeTwoDates = ( date1:Date, date2: Date ) =>{
    const diff = Math.abs(Number(date1) - Number(date2));
    const diffSeconds = Math.floor(diff / 1000);
    const diffDays = Math.floor(diff /(1000 * 3600 * 24))
    const diffHours = Math.floor(diff/(1000 * 3600))
    const diffMinutes = Math.floor(diff/(1000 * 60))
    if(diffMinutes < 60){
        return `${diffMinutes} minutes ago`
    }else if(diffHours < 24){
        return `${diffHours}h ago`
    }else if(diffHours > 24 && diffHours < 48){
        return `yesterday`
    }else if(diffDays > 1){
        return `${diffDays} days ago`
    }
}
const IdGenerator = () =>{
  const posts = JSON.parse(localStorage.getItem("posts") as string);
  if(posts){
      return posts.length+1
  }else{
    return 1
  }
}
export {RangeTwoDates, IdGenerator}