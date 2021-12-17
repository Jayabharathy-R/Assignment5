class movie{
    constructor(title,studio,rating=PG)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(arr){
        var res=arr.filter(row=> row.rating==PG);
        return res;
    }
}
var m1=new movie("Casino Royale","Eon Productions","PG13");
console.log(m1);