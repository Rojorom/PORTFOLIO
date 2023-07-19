<?php 

/* array_map(callable $callback, array $array, array ...$arrays): array; */


/*   se defione la funcion  */
  function double($n) {
    
    return $n * 2+5;
  }
  
  $numbers = array(1, 2, 3, 4, 5);

  $doubled_numbers = array_map("double", $numbers);
  
  print_r($doubled_numbers);
  




?>