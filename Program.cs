
int input = int.Parse(Console.ReadLine()), i, x, count;

Console.Write("Divisores: ");
for (i = 1; i <= input; ++i){
  if (input%i == 0){
    Console.Write(i+" ");
  }
}

Console.WriteLine("");

Console.Write("Divisores primos: ");
for (i = 1; i <= input; ++i){
  if (input%i == 0){
    count = 0;
    for (x = 1; x <= i; ++x){
      if (i%x == 0){
        ++count;
      }
    }
    if (count == 2){
      Console.Write(i+" ");
    }
  }
}
