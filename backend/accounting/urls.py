from django.urls import path
from .views import *

urlpatterns = [

    
    # Accounting
    
    # -> Income
    path('income/list', income_list, name='income_list'),
    path('income/add', income_add, name='income_add'),
    path('income/edit/<int:id>', income_edit, name='income_edit'),
    path('income/delete/<int:id>', income_delete, name='income_delete'),
    path('income/view/<int:id>', income_view, name='income_view'),
    
    # -> Expenses
    path('expenses/list', expenses_list, name='expenses_list'),
    path('expenses/add', expenses_add, name='expenses_add'),
    path('expenses/edit/<int:id>', expenses_edit, name='expenses_edit'),
    path('expenses/delete/<int:id>', expenses_delete, name='expenses_delete'),
    path('expenses/view/<int:id>', expenses_view, name='expenses_view'),
    
]
