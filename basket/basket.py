
class Basket():
    def __init__(self , request):
        self.session = request.session
        basket = self.session.get('skey')
        
        # It's the First Time User Enter in Web
        if 'skey' not in request.session:
            basket = self.session['skey'] = {}
        self.basket = basket

    def add(self , product):
        product_id = product.id
        if product_id not in self.basket :
            self.basket[product_id] = {'price':float(product.new_Price)}

        self.session.modified = True