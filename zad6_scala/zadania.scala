val uniqueDays = List("poniedzialek", "wtorek", "sroda", "czwartek", "piatek", "sobota", "niedziela")

// 1.1                        
var a = 0;
    for( a <- 0 to 6){
        println( uniqueDays(a) );
    }

// 1.2
var d = 0;
for( d <- 0 to 6){
    var day = uniqueDays(a);
    var firstLetter : String = day.take(1);
    if (firstLetter == "p"){
    println(day);
    }
}

// 1.3
uniqueDays.foreach{println}

// 1.4
var nb = 0;
while (nb < uniqueDays.size){
    println(uniqueDays(nb));
    nb += 1;
}

// 1.5
// TODO

// 1.6
// TODO

// 7
// foldl
println(uniqueDays.foldLeft(new StringBuilder){ (sb, s) => sb append s append " " }.toString)
// drugie rozwiazanie z foldl
println(uniqueDays.foldLeft(List.empty[String]) { (ele, acc) => acc :: ele })

// foldr
println(uniqueDays.foldRight(List.empty[String]) { (ele, acc) => ele :: acc })

// 8 Metody foldl wypisując tylko dni z nazwami zaczynającymi się na „P”
println(uniqueDays.foldLeft(List.empty[String]) { (acc, ele) => if (ele.take(1) == "p") ele :: acc else acc})

// 2
var productMap = Map("yonex astrox 99" -> 699,
                    "yonex voltric" -> 645,
                    "yonex astrox 2" -> 200,
                    "victor airbadminton shuttle" -> 40)

var products = List("yonex astrox 99", "yonex voltric", "yonex astrox 2", "victor airbadminton shuttle")
var newProductMap = (productMap.keys zip productMap.values.map(n => 0.9 * n)).toMap;
println(newProductMap);

// 3
def getThreeArgumentsTuple(threeElementTuple: Tuple3[String, Int, Double]){
    threeElementTuple.productIterator.foreach{println}
}

var threeElTuple = Tuple3("sample", 3, 5.5);
getThreeArgumentsTuple(threeElTuple);

// 4
def printKey(x: Option[Int]) = x match {
    case Some(s) => s
    case None => "Key not in dict!"
}

println(printKey(productMap.get("yonex duora")));
println(printKey(productMap.get("yonex astrox 99")));

// 5
def matchDays(day: String) = day match {
    case day: "poniedzialek" => "Praca"
    case day: "wtorek" => "Praca"
    case day: "sroda" => "Praca"
    case day: "czwartek" => "Praca"
    case day: "piatek" => "Praca"
    case day: "sobota" => "Weekend"
    case day: "niedziela" => "Weekend"
    case _ => "Nie ma takiego dnia"
};
println(matchDays("poniedzialek"));
println(matchDays("sunday"));


// 6
class KontoBankowe(_stanKontaPoczatek: Double = 0.0) {
    private var _stanKonta = _stanKontaPoczatek;

    def wplata(ile: Double) {_stanKonta += ile};

    def wyplata(ile: Double) {_stanKonta -= ile};

    def odczytajStanKonta = _stanKonta;
}

var konto = new KontoBankowe();
assert(konto.odczytajStanKonta == 0);
konto.wplata(15000.0);
konto.wyplata(50.0);
assert(konto.odczytajStanKonta == 14950.0);
println(konto.odczytajStanKonta);

var konto2 = new KontoBankowe(150000);
println(konto2.odczytajStanKonta)

// 7 
class Osoba(val firstName: String, val lastName: String){
}

var marcysia = new Osoba("Marcjanna", "J");
var zosia = new Osoba("Zofia", "Nowak");
var stefan = new Osoba("Stefan", "Kowalski");

def greeting(person:Osoba) = person.firstName match{
    case person: "Zofia" => "Hi, Zosia!"
    case person: "Marcjanna" => "Hello Marcysia!"
    case _=> "Welcome!"
};

println(greeting(marcysia));
println(greeting(zosia));
println(greeting(stefan));

// 8
def dropZeros(listOfNumbers: List[Int]) : List[Int] = {
     return listOfNumbers.filter(_ != 0);
}

var listOfNums = List(1, 0, 2, 0, 3, 3, 0);
var newList = dropZeros(listOfNums);
println(newList);

// 9 
def addOneToListElement(listOfOddNumber: List[Int]) : List[Int] = {
    //assert(addOneToListElement.map(n => n % 2 == 0) == true);
    return listOfOddNumber.map(n => n + 1)
}

addOneToListElement(List(1,0,0,4,5));

// 10
def filterToRange(listOfNumbers: List[Double]) : List[Double] = {
     return listOfNumbers.filter(_ <= 12).filter(_ >= -5).map(n => n.abs);
}

var listOfDoubles = List(1.0, 0.0, 20.0, 0.3, 30.0, -5);
var filteredList = filterToRange(listOfDoubles);
println(filteredList);