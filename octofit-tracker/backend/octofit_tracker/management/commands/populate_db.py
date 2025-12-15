from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear all data
        Activity.objects.all().delete()
        User.objects.all().delete()
        Team.objects.all().delete()
        Workout.objects.all().delete()
        Leaderboard.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        spiderman = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel)
        ironman = User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel)
        batman = User.objects.create(name='Batman', email='batman@dc.com', team=dc)
        superman = User.objects.create(name='Superman', email='superman@dc.com', team=dc)

        # Create activities
        Activity.objects.create(user=spiderman, type='Running', duration=30, date=timezone.now().date())
        Activity.objects.create(user=ironman, type='Cycling', duration=45, date=timezone.now().date())
        Activity.objects.create(user=batman, type='Swimming', duration=25, date=timezone.now().date())
        Activity.objects.create(user=superman, type='Yoga', duration=60, date=timezone.now().date())

        # Create workouts
        w1 = Workout.objects.create(name='Pushups', description='Do 20 pushups')
        w2 = Workout.objects.create(name='Situps', description='Do 30 situps')
        w1.suggested_for.set([spiderman, batman])
        w2.suggested_for.set([ironman, superman])

        # Create leaderboards
        Leaderboard.objects.create(team=marvel, points=150)
        Leaderboard.objects.create(team=dc, points=120)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
