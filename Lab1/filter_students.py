from groupmates import groupmates, print_students


def filter_by_avg_mark(students, min_avg):
    result = []
    for student in students:
        avg = sum(student["marks"]) / len(student["marks"])
        if avg > min_avg:
            result.append(student)
    return result


print("Студенты со средним баллом > 4")
filtered = filter_by_avg_mark(groupmates, 4)
print_students(filtered)