import random
import time

def make_random_list(n):
    l = []
    for i in range(n):
        l.append(random.randint(1, 300))
    return l

def merge_sort(list):
    if len(list) <= 1:
        return list

    middle = len(list) / 2

    return merge(merge_sort(list[:middle]), merge_sort(list[middle:]))

def merge(list1, list2):
    merged = []
    i = 0
    l1 = len(list1)
    j = 0
    l2 = len(list2)
    while len(merged) < l1 + l2:
        if i >= l1:
            merged.append(list2[j])
            j += 1
        elif j >= l2:
            merged.append(list1[i])
            i += 1
        elif list1[i] <= list2[j]:
            merged.append(list1[i])
            i += 1
        else:
            merged.append(list2[j])
            j += 1
    return merged


if __name__ == "__main__":
    l = make_random_list(10000000)
    start = time.time()
    sorted =  merge_sort(l)
    end = time.time()
    l.sort()

    print "Took %sms"%((end - start) * 1000)
    
    assert sorted == l
