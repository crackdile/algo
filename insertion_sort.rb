def insertion_sort(array)
  len = array.length
  sorted_array = []
  if len <= 0
    raise "Can't sort an empty array"
  end
  
  for i in 1..(len - 1)
    for j in 0..i
      i_element = array[i]
      j_element = array[j]
      
      if j_element > i_element
        array[i] = j_element
        array[j] = i_element
      end
    end
  end
  
  array
end

def make_big_array(how_many)
  array = []
  for i in 0..how_many
    array << rand(1000000)
  end
  array
end

def test_insertion_sort()
  an_array = make_big_array(100000)
  
  if an_array.sort == insertion_sort(an_array)
    puts "success :)"
  else
    puts "fail :("
  end
end

time_start = Time.now
test_insertion_sort
time_end = Time.now
puts "Time elapsed #{(time_end - time_start) * 1000} milliseconds"
