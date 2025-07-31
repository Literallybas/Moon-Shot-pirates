import matplotlib.pyplot as plt


dna = "ATGCGCGTAATCGATCGCGCGTTATATATATGCGCGC"


def gc_content(seq):
    g = seq.count("G")
    c = seq.count("C")
    return round((g+c)/len(seq)* 100,2)
# Here I can define whatever patterns of counting i prefere.

def count_pattern(seq,pattern):
    return seq.count(pattern)

gc= gc_content(dna)
pattern = "CG"
count= count_pattern(dna,pattern)

print("GC Content:", gc,"%")
print(f"Occurrences of '{pattern}:",count)

labels  = {'GC', 'AT'}
sizes   = [gc, 100 - gc]
colors  =['green', 'lightblue']
explode = (0.1,0)

plt.figure(figsize=(6,6))
plt.pie(sizes,labels=labels,autopct="%1.1f%%",colors=colors, explode=explode)
plt.title("GC DNA Pattern problem")
plt.show()

