from django.shortcuts import render, redirect

def home(request):
    breaks = request.session.get('breaks', [])

    if request.method == "POST":
        activity = request.POST.get("activity")
        time = request.POST.get("time")
        duration = request.POST.get("duration")

        if activity and time and duration:
            break_item = f"{activity} - {duration}mins - {time}"
            breaks.append(break_item)
            request.session['breaks'] = breaks

        return redirect('home')

    return render(request, 'index.html', {'breaks': breaks})
