from saas_admin.utils import *


logger = logging.getLogger(__name__)


# Accounting List #
def income_list(request):
    return render(request, 'accounting/income/list.html')

def income_add(request):
    return render(request, 'accounting/income/add.html')

def income_edit(request,id):
    return render(request, 'accounting/income/add.html')

def income_delete(request,id):
    pass

def income_view(request,id):
    return render(request, 'accounting/income/view.html')



def expenses_list(request):
    return render(request, 'accounting/expenses/list.html')

def expenses_add(request):
    return render(request, 'accounting/expenses/add.html')

def expenses_edit(request,id):
    return render(request, 'accounting/expenses/add.html')

def expenses_delete(request,id):
    pass

def expenses_view(request,id):
    return render(request, 'accounting/expenses/view.html')
