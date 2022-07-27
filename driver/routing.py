from django.core.asgi import get_asgi_application
from django.urls import path # new

from channels.routing import ProtocolTypeRouter, URLRouter # changed

from trips.customers import drunk_customer

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    # new
    'websocket': URLRouter([
        path('driver/', drunk_customer.as_asgi()),
    ]),
})